import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { TuMarketTopBar } from "../../../components/TopBar";
import { ArrowBack, EmailApply, Tune } from "../../../components/Icons";
import { SearchBar } from "../../../components/SearchDisplay";
import st from "./jobView.sass";
import { ApplyBtnWide, JobTopBar } from "../JobComponents";

const JobView = ({navigation}) => {
  const [input, setInput] = useState("");

  const nextPage = ()=>{
    navigation.navigate("JobApply")
  }

  return (
    <View style={st.g_container}>
      <JobTopBar title="Detalles" />
      <ScrollView style={st.scrollview}>
        <View style={{ marginLeft: -20 }}>
          <TuMarketTopBar title="Cajero" hour="2 hour ago" />
        </View>
        <Text style={st.price}>$200</Text>
        <Text style={st.subtitle}>Descripction</Text>
        <Text style={st.text}>
          Responsable por la recepción, manejo y custodia del dinero o
          documentos relacionados, tales como: efectivo, cheques, tiquetes de
          tarjetas crédito/débito, etc), resultantes de la transacciones diarias
          de venta Ejecutar los procesos operativos de cobro de mercadería y
          servicios públicos en la tienda siguiendo los lineamientos
          establecidos para el registro y recepción de cualquier medio de pago
          autorizado (efectivo, tarjetas de débito y crédito, entre otros), con
          el objetivo de brindar un excelente servicio y atención a los
          clientes. Colaborar con otras funciones operativas, relacionadas con
          la presentación de la tienda y actualización de los inventarios.
          
        </Text>
        <Text style={st.subtitle}>Requisitos</Text>
        <Text>Bachiller Ed. Media</Text>
        <Text style={{ marginVertical: 16 }}>
          Esquema de 2 dosis de la vacuna Covid (3era plus)
        </Text>
        <Text>Flexibilidad de horarios rotativos</Text>
        <ApplyBtnWide action={nextPage} />
      </ScrollView>
    </View>
  );
};

export default JobView;
