import style from './optionbanner.module.css'
import Slider from 'react-slick';
import {useContext, useState} from "react";
import OptionContext from "../../../context/OptionContext";

const OptionBanner = () =>
{
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const optionContext = useContext(OptionContext);

    const tabs = [
        'Paciente',
        'Citas',
        'Historia Clínica',
        'Empleados',
        'Tipo Empleado',
        'Inventario',
        'Producto',
        'Proveedor',
        'Orden de Compra',
        'Seguridad',
    ];

    const SampleNextArrow = (props) =>
    {
        const { className, style, onClick } = props;

        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "transparent", color: "#FFF" }}
                onClick={onClick}
            />
        );
    }

    const SamplePrevArrow = (props) =>
    {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", backgroundColor: "transparent" }}
                onClick={onClick}
            />
        );
    }

    const handleTabClick = (index, tab) =>
    {
        setSelectedTabIndex(index);
        switch (tab)
        {
            case 'Paciente':
                tab = 'patient';
                break;
            case 'Citas':
                tab = 'appointment';
                break;
            case 'Historia Clínica':
                tab = 'history';
                break;
            case 'Empleados':
                tab = 'employee';
                break;
            case 'Tipo Empleado':
                tab = 'typeemployee';
                break;
            case 'Inventario':
                tab = 'inventory';
                break;
            case 'Producto':
                tab = 'product';
                break;
            case 'Proveedor':
                tab = 'provider';
                break;
            case 'Orden de Compra':
                tab = 'purchaseOrder';
                break;
            case 'Seguridad':
                tab = 'dataSecurity';
                break;
            default:
                tab = 'patient';
                break;
        }
        optionContext.setOption(tab);
    };

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1px 10px",
        }
    };

    return (
        <div className={style.OptionBanner}>
            <Slider {...settings}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`${style.OptionBannerTab} `}
                    >
                        <button
                            className={`${style.OptionButton} ${selectedTabIndex === index ? style.SelectedOption : ''}`}
                            onClick={() => handleTabClick(index, tab)}
                        >
                            {tab}
                        </button>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default OptionBanner;