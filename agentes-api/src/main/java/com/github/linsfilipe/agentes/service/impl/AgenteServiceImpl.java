package com.github.linsfilipe.agentes.service.impl;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.github.linsfilipe.agentes.dto.DataDTO;
import com.github.linsfilipe.agentes.service.AgenteService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class AgenteServiceImpl implements AgenteService {

    @Override
    public void processAgentesFile(MultipartFile file) {
        String fileName = file.getOriginalFilename();
        try {
            XmlMapper xmlMapper = new XmlMapper();
            DataDTO data = xmlMapper.readValue(file.getInputStream(), DataDTO.class);
            System.out.println("Nome do arquivo: " + fileName);
            data.getAgentes().forEach(a -> System.out.println(a.getCodigo()));
        } catch (IOException e) {
            throw new RuntimeException("Erro ao ler o arquivo: " + fileName);
        }
    }

}
