import style from './infobar.module.css';
import {useContext} from "react";
import OptionContext from "../../context/OptionContext";
import BarContainer from "./barcontainer/BarContainer";

const InfoBar = ({isOpen, setOpen, info}) =>
{
    const optionContext = useContext(OptionContext);

    const closeBar = () =>
    {
        setOpen(prev => !prev);
    }

    return (
        <>
            {isOpen && (
                <div className={style.Infobar}>
                    <div className={style.InfobarContainer}>
                        <div className={style.Delete} onClick={closeBar}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B0B0B0" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                        <BarContainer option={optionContext.option} action={optionContext.action} info={info} setOpen={setOpen} />
                    </div>
                </div>
            )}
        </>
    );
}

export default InfoBar;