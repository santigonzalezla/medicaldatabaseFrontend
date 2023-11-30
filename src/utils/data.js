const patient = {
    idPatient: 1003313706,
    name: 'Nombre',
    lastName: 'Apellido',
    phone: 3123456789,
    gender: 'Masculino',
    age: 20,
};

const appointment = {
    idAppointment: 1,
    idPatient: 1003313706,
    date: '2021-10-10',
    hour: '10:00',
    type: 'Consulta',
    idEmployee: 1,
};

const clinicalHistory = {
    idClinicalHistory: 1,
    idPatient: 1003313706,
    date: '2021-10-10',
    diagnostic: 'Back pain',
    treatment: 'Surgery',
};

const employee = {
    idEmployee: 1,
    idType: 1,
    name: 'Nombre',
    lastName: 'Apellido',
}

const typeEmployee = {
    idType: 1,
    type: 'Doctor',
}

const provider = {
    idProvider: 1,
    name: 'Nombre',
    phone: 3123456789,
    address: 'Calle 1 # 2 - 3',
}

const product = {
    productId: '123456789',
    providerId: 1,
    name: 'Nombre',
    type: 'Medicamento',
    dueDate: '2021-10-10',
}

const inventory = {
    inventoryId: '123456789',
    productId: '123456789',
    quantity: 10,
}

const dataSecurity = {
    registerId: '123456789',
    type: 'Entrada',
    description: 'Ingreso de medicamentos',
    employeeId: 1,
    dateTime: '2021-10-10 10:00',
}

const purchaseOrder = {
    orderId: '123456789',
    providerId: 1,
    state: 'Pendiente',
    date: '2021-10-10',
}

export {
    patient,
    appointment,
    clinicalHistory,
    employee,
    typeEmployee,
    provider,
    product,
    inventory,
    dataSecurity,
    purchaseOrder,
}