import { useUserSettings } from "../../shared/hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { NewRoom } from "./room/NewRoom";
import { DeleteRoom } from "./room/DeleteRoom";
import { RestoreRoom } from "./room/RestoreRoom";

export const RoomSettings = () => {
    const { userSettings, isFetching: isUserFetching, saveSettings } = useUserSettings()

    if (isUserFetching) {
        return <LoadingSpinner />
    }

    return (
        <div className="settings-supreme">
            <span className="title-supreme">Event settings</span>
            {userSettings && userSettings.role === 'CLIENT_ROLE' ? (
                <div className="settings-container">
                    Bro? que haces tú aqui? 🤨
                </div>
            ) : userSettings && userSettings.role === 'MANAGER_ROLE' ? (
                <div>
                    <div className="settings-container">
                        Bro? sabes bien que solo los admin pueden editar eventos 🤨
                    </div>
                </div>
            ) : userSettings && userSettings.role === 'ADMIN_ROLE' ? (
                <div>
                    <div className="settings-container">
                        <NewRoom/>
                    </div>
                    <div className="settings-container">
                        <DeleteRoom/>
                        <RestoreRoom/>
                    </div>
                </div>
            ) : (
                <div>No settings available for this role</div>
            )}
        </div>
    )
}