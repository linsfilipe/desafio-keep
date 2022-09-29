package com.github.linsfilipe.agentes.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class DataDTO {

    @JacksonXmlProperty(localName = "agente")
    @JacksonXmlElementWrapper(useWrapping=false)
    private List<AgenteDTO> agentes;

    private Double versao;

}
