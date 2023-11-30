import style from './list.module.css';
import InfoCard from "../infocard/InfoCard";
import { useContext } from "react";
import OptionContext from "../../context/OptionContext";
import useFetch from "../../hooks/useFetch";

const List = ({ setOpen, setInfo }) =>
{
    const optionContext = useContext(OptionContext);
    const { data, loading } = useFetch(`https://medicaldatabase.onrender.com/api/${optionContext.option}`);

    const handleCreate = () =>
    {
        setOpen(prev => !prev);
        optionContext.setAction('create');
    }

    return (
        <div className={style.List}>
            <div className={style.ListTop}>
                <h2>Listado de {optionContext.option}</h2>
                <button onClick={handleCreate}> Crear {optionContext.option}</button>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {data.map((item, index) => (
                        <InfoCard
                            key={index}
                            type={optionContext.option}
                            setAction={optionContext.setAction}
                            setOpen={setOpen}
                            info={item} setInfo={setInfo}
                        />
                    ))}
                </>
            )}
        </div>
    );
}

export default List;