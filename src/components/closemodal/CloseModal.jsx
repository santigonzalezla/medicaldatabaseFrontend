import style from './closemodal.module.css';

const closeModal = ({ active, setActive, deleteData, type, info }) =>
{
    const handleClose = () =>
    {
        setActive(prev => !prev);
    }

    const handleDelete = () =>
    {
        switch (type)
        {
            case "provider":
                deleteData(info, info._id);
                setActive(prev => !prev);
                alert("Proveedor eliminado correctamente");
                break;
            case "product":
                deleteData(info, info._id);
                setActive(prev => !prev);
                alert("Producto eliminado correctamente");
                break;
            case "inventory":
                deleteData(info, info._id);
                setActive(prev => !prev);
                alert("Inventario eliminado correctamente");
                break;
            case "purchaseOrder":
                deleteData(info, info._id);
                setActive(prev => !prev);
                alert("Orden de compra eliminada correctamente");
                break;
            case "dataSecurity":
                deleteData(info, info._id);
                setActive(prev => !prev);
                alert("Registro eliminado correctamente");
                break;
            default:
                break;
        }
    }

    return (
        <>
            {active && (
                <div className={style.CloseModal}>
                    <div className={style.Overlay}>
                        <div className={style.Delete} onClick={handleClose}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B0B0B0" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                        <h1>¿Está seguro que desea eliminar el registro?</h1>
                        <div className={style.Buttons}>
                            <button className={style.Accept} onClick={handleDelete}>Aceptar</button>
                            <button className={style.Decline} onClick={() => setActive(prev => !prev)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default closeModal;