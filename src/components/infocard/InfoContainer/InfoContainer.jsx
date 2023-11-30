import style from "../infocard.module.css";

const InfoContainer = ({ type, info }) =>
{
    return (
        <>
            {type === "patient" && (
                <>
                    <h1>
                        {info.name} {info.lastName}
                    </h1>
                    <div className={style.InfoDisplay}>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                ID: <span>{info.idPatient}</span>
                            </h4>
                            <h4>
                                Celular: <span>{info.phone}</span>
                            </h4>
                        </div>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                Genero: <span>{info.gender}</span>
                            </h4>
                            <h4>
                                Edad: <span>{info.age}</span>
                            </h4>
                        </div>
                    </div>
                </>
            )}

            {type === "appointment" && (
                <>
                    <h1>
                        Paciente: {info.idPatient}
                    </h1>
                    <div className={style.InfoDisplay}>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                ID Cita: <span>{info.idAppointment}</span>
                            </h4>
                            <h4>
                                ID Empleado: <span>{info.idEmployee}</span>
                            </h4>
                        </div>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                Fecha: <span>{info.date}</span>
                            </h4>
                            <h4>
                                Hora: <span>{info.hour}</span>
                            </h4>
                        </div>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                Tipo: <span>{info.type}</span>
                            </h4>
                        </div>
                    </div>
                </>
            )}

            {type === "history" && (
                <>
                    <h1>
                        Paciente: {info.idPatient}
                    </h1>
                    <div className={style.InfoDisplay}>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                ID Historia: <span>{info.idClinicalHistory}</span>
                            </h4>
                            <h4>
                                Fecha: <span>{info.date}</span>
                            </h4>
                        </div>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                Diagnóstico: <span>{info.diagnostic}</span>
                            </h4>
                            <h4>
                                Tratamiento: <span>{info.treatment}</span>
                            </h4>
                        </div>
                    </div>
                </>
            )}

            {type === "employee" && (
                <>
                    <h1>
                        {info.name} {info.lastName}
                    </h1>
                    <div className={style.InfoDisplay}>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                ID Empleado: <span>{info.idEmployee}</span>
                            </h4>
                            <h4>
                                ID Tipo Empleado: <span>{info.idType}</span>
                            </h4>
                        </div>
                    </div>
                </>
            )}

            {type === "typeemployee" && (
                <>
                    <h1>
                        {info.type}
                    </h1>
                    <div className={style.InfoDisplay}>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                ID Empleado: <span>{info.idType}</span>
                            </h4>
                        </div>
                    </div>
                </>
            )}

            {type === "provider" && (
                <>
                    <h1>
                        {info.name}
                    </h1>
                    <div className={style.InfoDisplay}>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                ID Proveedor: <span>{info.providerId}</span>
                            </h4>
                            <h4>
                                Celular: <span>{info.phone}</span>
                            </h4>
                        </div>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                Dirección: <span>{info.address}</span>
                            </h4>
                        </div>
                    </div>
                </>
            )}

            {type === "product" && (
                <>
                    <h1>
                        {info.name}
                    </h1>
                    <div className={style.InfoDisplay}>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                ID Producto: <span>{info.productId}</span>
                            </h4>
                            <h4>
                                ID Proveedor: <span>{info.providerId}</span>
                            </h4>
                        </div>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                Tipo: <span>{info.type}</span>
                            </h4>
                            <h4>
                                Fecha Vencimiento: <span>{info.dueDate ? info.dueDate.split("T")[0] : info.dueDate}</span>
                            </h4>
                        </div>
                    </div>
                </>
            )}

            {type === "inventory" && (
                <>
                    <h1>
                        ID Inventario: {info.inventoryId}
                    </h1>
                    <div className={style.InfoDisplay}>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                ID Producto: <span>{info.productId}</span>
                            </h4>
                            <h4>
                                Cantidad: <span>{info.quantity}</span>
                            </h4>
                        </div>
                    </div>
                </>
            )}

            {type === "dataSecurity" && (
                <>
                    <h1>
                        ID Registro: {info.registerId}
                    </h1>
                    <div className={style.InfoDisplay}>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                Tipo: <span>{info.type}</span>
                            </h4>
                            <h4>
                                Empleado: <span>{info.employeeId}</span>
                            </h4>
                        </div>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                Fecha:
                                <span>
                                    {info.dateTime
                                        ? `${info.dateTime.split(':').slice(0, -1).join(':').split('T')[0]} - ${info.dateTime.split(':').slice(0, -1).join(':').split('T')[1]}`
                                        : info.dateTime}
                                </span>
                            </h4>
                            <h4>
                                Descripción: <span>{info.description}</span>
                            </h4>
                        </div>
                    </div>
                </>
            )}

            {type === "purchaseOrder" && (
                <>
                    <h1>
                        ID Orden: {info.orderId}
                    </h1>
                    <div className={style.InfoDisplay}>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                ID Proveedor: <span>{info.providerId}</span>
                            </h4>
                            <h4>
                                Estado: <span>{info.state}</span>
                            </h4>
                        </div>
                        <div className={style.InfoDisplayText}>
                            <h4>
                                Fecha: <span>{info.date ? info.date.split("T")[0] : info.date}</span>
                            </h4>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default InfoContainer;