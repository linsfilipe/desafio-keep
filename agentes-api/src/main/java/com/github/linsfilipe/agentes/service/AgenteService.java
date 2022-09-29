package com.github.linsfilipe.agentes.service;

import org.springframework.web.multipart.MultipartFile;

public interface AgenteService {

    void processAgentesFile(MultipartFile file);

}
