package com.github.linsfilipe.agentes.controller;

import com.github.linsfilipe.agentes.service.AgenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import static com.github.linsfilipe.agentes.constant.ApplicationConstants.API_ROOT;

@RestController
@RequestMapping(API_ROOT + "/agentes")
public class AgenteController {

    @Autowired
    private AgenteService agenteService;

    @PostMapping(value = "/upload-files",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity uploadAgentesFiles(@RequestPart MultipartFile file) throws IOException {
        agenteService.processAgentesFile(file);
        return ResponseEntity.ok().build();
    }
}
