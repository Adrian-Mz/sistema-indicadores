import { EMBEDS_BY_SECTOR } from "./embeds.config";
import { PageKey } from "./types";
import { useSession } from "../../hooks/useSession";
import { useUserProfile } from "../../hooks/useUserProfiles";

type Props = {
    page: PageKey;
}

const EmbedRenderer = ({ page } : Props ) => {
    const { session, loading : sessionLoading } = useSession();
    const { profile, loading : profileLoading } = useUserProfile(session);

    if (sessionLoading || profileLoading) {
        return <p>Cargando visualización...</p>;
    }

    if (!profile?.sector) {
        return <p>No tienes sector asignado.</p>;
    }
    
    const sectorEmbeds = EMBEDS_BY_SECTOR[profile.sector];

    if (!sectorEmbeds || !sectorEmbeds[page]) {
        return <p>No hay visualización disponible para este sector.</p>;
    }

    return (
        <iframe
            src={sectorEmbeds[page]}
            width="100%"
            style={{
                border:'0', 
                position:'absolute',
                top:0, 
                left:0,
                width:'100%', 
                height:'100%',
            }}
        />
    );
};

export default EmbedRenderer;