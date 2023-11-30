import style from './infocard.module.css';
import InfoContainer from "./InfoContainer/InfoContainer";
import useFetch from "../../hooks/useFetch";
import CloseModal from "../closemodal/CloseModal";
import {useState} from "react";

const InfoCard = ({ type, info, setOpen, setInfo, setAction }) =>
{
    const { deleteData } = useFetch(`https://medicaldatabase.onrender.com/api/${type}`);
    const [active, setActive] = useState(false);

    const handleEdit = () =>
    {
        setOpen(prev => !prev);
        setInfo(info);
        setAction('edit');
    }

    const handleDelete = () =>
    {
        setActive(prev => !prev);
    }

    return (
        <>
            <div className={style.InfoCard}>
                <div className={style.InfoStatus}></div>
                <div className={style.InfoContainer}>
                    <div className={style.InfoContent}>
                        <InfoContainer
                            type={type}
                            info={info}
                        />
                    </div>
                    <div className={style.InfoButton}>
                        <div className={style.Edit} onClick={() => handleEdit()}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B0B0B0"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                            </svg>
                        </div>
                        <div className={style.Delete} onClick={() => handleDelete()}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B0B0B0" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                </div>
                <CloseModal active={active} setActive={setActive} deleteData={deleteData} info={info} type={type}/>
            </div>
        </>
    );
}

export default InfoCard;