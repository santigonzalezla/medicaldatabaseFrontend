import style from '../infobar.module.css';
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

const BarContainer = ({ option, setOpen, info, action }) =>
{
    const { postData, putData } = useFetch(`/${option}`);

    const [provider, setProvider] = useState({
        providerId: info.providerId,
        name: info.name,
        phone: info.phone,
        address: info.address,
    });

    const [product, setProduct] = useState({
        productId: info.productId,
        providerId: info.providerId,
        name: info.name,
        type: info.type,
        dueDate: info.dueDate,
    });

    const [inventory, setInventory] = useState({
        inventoryId: info.inventoryId,
        productId: info.productId,
        quantity: info.quantity,
    });

    const [purchaseOrder, setPurchaseOrder] = useState({
        orderId: info.orderId,
        providerId: info.providerId,
        state: info.state,
        date: info.date,
    });

    const [dataSecurity, setDataSecurity] = useState({
        registerId: info.registerId,
        type: info.type,
        employeeId: info.employeeId,
        description: info.description,
        dateTime: info.dateTime,
    });

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        if (action === 'create')
        {
            switch (option)
            {
                case "provider":
                    setOpen(prev => !prev);
                    alert("Proveedor creado");
                    await postData(provider);
                    break;
                case "product":
                    setOpen(prev => !prev);
                    alert("Producto creado")
                    await postData(product);
                    break;
                case "inventory":
                    setOpen(prev => !prev);
                    alert("Inventario creado")
                    await postData(inventory);
                    break;
                case "purchaseOrder":
                    setOpen(prev => !prev);
                    alert("Orden de compra creada")
                    await postData(purchaseOrder);
                    break;
                case "dataSecurity":
                    setOpen(prev => !prev);
                    alert("Registro de seguridad creado")
                    await postData(dataSecurity);
                    break;
                default:
                    break;
            }
        }
        else if (action === 'edit')
        {
            switch (option)
            {
                case "provider":
                    setOpen(prev => !prev);
                    alert("Proveedor actualizado")
                    await putData(provider, info._id);
                    break;
                case "product":
                    setOpen(prev => !prev);
                    alert("Producto actualizado")
                    await putData(product, info._id);
                    break;
                case "inventory":
                    setOpen(prev => !prev);
                    alert("Inventario actualizado")
                    await putData(inventory, info._id);
                    break;
                case "purchaseOrder":
                    setOpen(prev => !prev);
                    alert("Orden de compra actualizada")
                    await putData(purchaseOrder, info._id);
                    break;
                case "dataSecurity":
                    setOpen(prev => !prev);
                    alert("Registro de seguridad actualizado")
                    await putData(dataSecurity, info._id);
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <>
            {option === "patient" && (
                <form className={style.InfobarForm}>
                    <h2>Información del Paciente</h2>
                    <div className={style.InfobarFormContainer}>
                        <div className={style.InfobarInput}>
                            <label>ID Paciente:</label>
                            <input type="text" required placeholder="ID paciente" />
                        </div>
                        <div className={style.InfoWrapper}>
                            <div className={style.InfobarInput}>
                                <label>Nombre:</label>
                                <input type="text" required placeholder="Nombre" />
                            </div>
                            <div className={style.InfobarInput}>
                                <label>Apellido:</label>
                                <input type="text" required placeholder="Apellido" />
                            </div>
                        </div>
                        <div className={style.InfobarInput}>
                            <label>Celular:</label>
                            <input type="text" required placeholder="Celular" />
                        </div>
                        <div className={style.InfoWrapper}>
                            <div className={style.InfobarInput}>
                                <label>Genero:</label>
                                <input type="text" required placeholder="Genero" />
                            </div>
                            <div className={style.InfobarInput}>
                                <label>Edad:</label>
                                <input type="text" required placeholder="Edad" />
                            </div>
                        </div>
                    </div>
                    <button type="submit">Guardar Cambios</button>
                </form>
            )}

            {option === "appointment" && (
                <form className={style.InfobarForm}>
                    <h2>Información de la Cita</h2>
                    <div className={style.InfobarFormContainer}>
                        <div className={style.InfobarInput}>
                            <label>ID Cita:</label>
                            <input type="text" required placeholder="ID Cita" />
                        </div>
                        <div className={style.InfoWrapper}>
                            <div className={style.InfobarInput}>
                                <label>ID Paciente:</label>
                                <input type="text" required placeholder="ID Paciente" />
                            </div>
                            <div className={style.InfobarInput}>
                                <label>Tipo de Cita:</label>
                                <input type="text" required placeholder="Tipo de Cita" />
                            </div>
                        </div>
                        <div className={style.InfobarInput}>
                            <label>ID Empleado:</label>
                            <input type="text" required placeholder="ID Empleado" />
                        </div>
                        <div className={style.InfoWrapper}>
                            <div className={style.InfobarInput}>
                                <label>Fecha & Hora:</label>
                                <input type="datetime-local" required />
                            </div>
                        </div>
                    </div>
                    <button type="submit">{action === 'create' ? 'Crear Cita' : 'Guardar Cambios'}</button>
                </form>
            )}

            {option === "history" && (
                <form className={style.InfobarForm}>
                    <h2>Información de la Historia</h2>
                    <div className={style.InfobarFormContainer}>
                        <div className={style.InfobarInput}>
                            <label>ID Historia:</label>
                            <input type="text" required placeholder="ID Historia" />
                        </div>
                        <div className={style.InfoWrapper}>
                            <div className={style.InfobarInput}>
                                <label>ID Paciente:</label>
                                <input type="text" required placeholder="ID Paciente" />
                            </div>
                            <div className={style.InfobarInput}>
                                <label>Fecha:</label>
                                <input type="date" required placeholder="Fecha" />
                            </div>
                        </div>
                        <div className={style.InfobarInput}>
                            <label>Diagnóstico:</label>
                            <input type="text" required placeholder="Diagnóstico" />
                        </div>
                        <div className={style.InfobarInput}>
                            <label>Tratamiento:</label>
                            <input type="text" required placeholder="Tratamiento" />
                        </div>
                    </div>
                    <button type="submit">{action === 'create' ? 'Crear Historia' : 'Guardar Cambios'}</button>
                </form>
            )}

            {option === "employee" && (
                <form className={style.InfobarForm}>
                    <h2>Información del Empleado</h2>
                    <div className={style.InfobarFormContainer}>
                        <div className={style.InfobarInput}>
                            <label>ID Empleado:</label>
                            <input type="text" required placeholder="ID Empleado" />
                        </div>
                        <div className={style.InfobarInput}>
                            <label>ID Tipo Empleado:</label>
                            <input type="text" required placeholder="ID Tipo Empleado" />
                        </div>
                        <div className={style.InfoWrapper}>
                            <div className={style.InfobarInput}>
                                <label>Nombre:</label>
                                <input type="text" required placeholder="Nombre" />
                            </div>
                            <div className={style.InfobarInput}>
                                <label>Apellido:</label>
                                <input type="text" required placeholder="Apellido" />
                            </div>
                        </div>
                    </div>
                    <button type="submit">{action === 'create' ? 'Crear Empleado' : 'Guardar Cambios'}</button>
                </form>
            )}

            {option === "typeemployee" && (
                <form className={style.InfobarForm}>
                    <h2>Información de Tipo Empleado</h2>
                    <div className={style.InfobarFormContainer}>
                        <div className={style.InfobarInput}>
                            <label>ID Tipo Empleado:</label>
                            <input type="text" required placeholder="ID Tipo Empleado" />
                        </div>
                        <div className={style.InfobarInput}>
                            <label>Nombre:</label>
                            <input type="text" required placeholder="Nombre" />
                        </div>
                    </div>
                    <button type="submit">{action === 'create' ? 'Crear Tipo Empleado' : 'Guardar Cambios'}</button>
                </form>
            )}

            {option === "provider" && (
                <form className={style.InfobarForm} onSubmit={handleSubmit}>
                    <h2>Información del Proveedor</h2>
                    <div className={style.InfobarFormContainer}>
                        <div className={style.InfobarInput}>
                            <label>ID Proveedor:</label>
                            <input
                                type="text"
                                required
                                onChange={(e) => setProvider({ ...provider, providerId: e.target.value })}
                                value={provider.providerId}
                                placeholder="ID Proveedor"
                            />
                        </div>
                        <div className={style.InfoWrapper}>
                            <div className={style.InfobarInput}>
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setProvider({ ...provider, name: e.target.value })}
                                    value={provider.name}
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className={style.InfobarInput}>
                                <label>Teléfono:</label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setProvider({ ...provider, phone: e.target.value })}
                                    value={provider.phone}
                                    placeholder="Teléfono"
                                />
                            </div>
                        </div>
                        <div className={style.InfobarInput}>
                            <label>Dirección:</label>
                            <input
                                type="text"
                                required
                                onChange={(e) => setProvider({ ...provider, address: e.target.value })}
                                value={provider.address}
                                placeholder="Dirección"
                            />
                        </div>
                    </div>
                    <button type="submit">{action === 'create' ? 'Crear Proveedor' : 'Guardar Cambios'}</button>
                </form>
            )}

            {option === "product" && (
                <form className={style.InfobarForm} onSubmit={handleSubmit}>
                    <h2>Información del Producto</h2>
                    <div className={style.InfobarFormContainer}>
                        <div className={style.InfobarInput}>
                            <label>ID Producto:</label>
                            <input
                                type="text"
                                required
                                onChange={(e) => setProduct({ ...product, productId: e.target.value })}
                                value={product.productId}
                                placeholder="ID Producto"
                            />
                        </div>
                        <div className={style.InfobarInput}>
                            <label>ID Proveedor:</label>
                            <input
                                type="text"
                                required
                                onChange={(e) => setProduct({ ...product, providerId: e.target.value })}
                                value={product.providerId}
                                placeholder="ID Proveedor"
                            />
                        </div>
                        <div className={style.InfoWrapper}>
                            <div className={style.InfobarInput}>
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                    value={product.name}
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className={style.InfobarInput}>
                                <label>Tipo Producto:</label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setProduct({ ...product, type: e.target.value })}
                                    value={product.type}
                                    placeholder="Tipo Producto"
                                />
                            </div>
                        </div>
                        <div className={style.InfobarInput}>
                            <label>Fecha Vencimiento:</label>
                            <input
                                type="date"
                                required
                                onChange={(e) => setProduct({ ...product, dueDate: e.target.value })}
                                value={product.dueDate ? product.dueDate.split("T")[0] : null}
                            />
                        </div>
                    </div>
                    <button type="submit">{action === 'create' ? 'Crear Producto' : 'Guardar Cambios'}</button>
                </form>
            )}

            {option === "inventory" && (
                <form className={style.InfobarForm} onSubmit={handleSubmit}>
                    <h2>Información del Inventario</h2>
                    <div className={style.InfobarFormContainer}>
                        <div className={style.InfobarInput}>
                            <label>ID Inventario:</label>
                            <input
                                type="text"
                                required
                                onChange={(e) => setInventory({ ...inventory, inventoryId: e.target.value })}
                                value={inventory.inventoryId}
                                placeholder="ID Inventario"
                            />
                        </div>
                        <div className={style.InfobarInput}>
                            <label>ID Producto:</label>
                            <input
                                type="text"
                                required
                                onChange={(e) => setInventory({ ...inventory, productId: e.target.value })}
                                value={inventory.productId}
                                placeholder="ID Producto"
                            />
                        </div>
                        <div className={style.InfobarInput}>
                            <label>Cantidad:</label>
                            <input
                                type="text"
                                required
                                onChange={(e) => setInventory({ ...inventory, quantity: e.target.value })}
                                value={inventory.quantity}
                                placeholder="Cantidad"
                            />
                        </div>
                    </div>
                    <button type="submit">{action === 'create' ? 'Crear Inventario' : 'Guardar Cambios'}</button>
                </form>
            )}

            {option === "dataSecurity" && (
                <form className={style.InfobarForm} onSubmit={handleSubmit}>
                    <h2>Información del Data Security</h2>
                    <div className={style.InfobarFormContainer}>
                        <div className={style.InfobarInput}>
                            <label>ID Registro:</label>
                            <input
                                type="text"
                                required
                                onChange={(e) => setDataSecurity({ ...dataSecurity, registerId: e.target.value })}
                                value={dataSecurity.registerId}
                                placeholder="ID Registro"
                            />
                        </div>
                        <div className={style.InfoWrapper}>
                            <div className={style.InfobarInput}>
                                <label>Tipo Evento:</label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setDataSecurity({ ...dataSecurity, type: e.target.value })}
                                    value={dataSecurity.type}
                                    placeholder="Tipo Evento"
                                />
                            </div>
                            <div className={style.InfobarInput}>
                                <label>ID Empleado:</label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setDataSecurity({ ...dataSecurity, employeeId: e.target.value })}
                                    value={dataSecurity.employeeId}
                                    placeholder="ID Empleado"
                                />
                            </div>
                        </div>
                        <div className={style.InfobarInput} onSubmit={handleSubmit}>
                            <label>Descripción:</label>
                            <input
                                type="text"
                                required
                                onChange={(e) => setDataSecurity({ ...dataSecurity, description: e.target.value })}
                                value={dataSecurity.description}
                                placeholder="Descripción"
                            />
                        </div>
                        <div className={style.InfobarInput}>
                            <label>Fecha & Hora:</label>
                            <input
                                type="datetime-local"
                                required
                                onChange={(e) => setDataSecurity({ ...dataSecurity, dateTime: e.target.value })}
                                value={dataSecurity.dateTime ? dataSecurity.dateTime.split(':').slice(0, -1).join(':') : null}
                            />
                        </div>
                    </div>
                    <button type="submit">{action === 'create' ? 'Crear Registro' : 'Guardar Cambios'}</button>
                </form>
            )}

            {option === "purchaseOrder" && (
                <form className={style.InfobarForm} onSubmit={handleSubmit}>
                    <h2>Información de Orden de Compra</h2>
                    <div className={style.InfobarFormContainer}>
                        <div className={style.InfobarInput}>
                            <label>ID Orden:</label>
                            <input
                                type="text"
                                required
                                onChange={(e) => setPurchaseOrder({ ...purchaseOrder, orderId: e.target.value })}
                                value={purchaseOrder.orderId}
                                placeholder="ID Orden"
                            />
                        </div>
                        <div className={style.InfoWrapper}>
                            <div className={style.InfobarInput}>
                                <label>ID Proveedor:</label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setPurchaseOrder({ ...purchaseOrder, providerId: e.target.value })}
                                    value={purchaseOrder.providerId}
                                    placeholder="ID Proveedor"
                                />
                            </div>
                            <div className={style.InfobarInput}>
                                <label>Estado:</label>
                                <input
                                    type="text"
                                    required
                                    onChange={(e) => setPurchaseOrder({ ...purchaseOrder, state: e.target.value })}
                                    value={purchaseOrder.state}
                                    placeholder="Estado"
                                />
                            </div>
                        </div>
                        <div className={style.InfobarInput}>
                            <label>Fecha:</label>
                            <input
                                type="date"
                                required
                                onChange={(e) => setPurchaseOrder({ ...purchaseOrder, date: e.target.value })}
                                value={purchaseOrder.date ? purchaseOrder.date.split("T")[0] : null}
                            />
                        </div>
                    </div>
                    <button type="submit">{action === 'create' ? 'Crear Orden' : 'Guardar Cambios'}</button>
                </form>
            )}
        </>
    );
}

export default BarContainer;