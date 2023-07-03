import React, { useState } from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import HospitalIcon from "../assets/hospital.png"
import LogoutIcon from "../assets/logout.png"
import Cookies from 'universal-cookie'
import TeamChannelPreview from './TeamChannelPreview'
import TeamChannelList from './TeamChannelList'
import ChannelSearch from './ChannelSearch'

const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>
)

const ChannelListContent = () => {
    return (

        <>
            <SideBar />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="team"

                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}

                            type="team"
                        />
                    )}
                />
                <ChannelList
    
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="messaging"
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    )
}

const ChannelListContainer = ({}) => {
    const [toggleContainer, setToggleContainer] = useState(false)
    return (
        <>
            <div className="channel-list__container">
                <ChannelListContent />
            </div>

            <div className="channel-list__container-responsive"
                style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff" }}
            >
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
                </div>
                <ChannelListContent />
            </div>
        </>
    )
}

export default ChannelListContainer