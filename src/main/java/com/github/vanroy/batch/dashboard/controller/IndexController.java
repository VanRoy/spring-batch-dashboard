package com.github.vanroy.batch.dashboard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by julien on 23/07/2016.
 */
@Controller
public class IndexController {

	@RequestMapping({
		"/jobs",
		"/jobs/{id:\\w+}"
	})
	public String redirect() {
		return "forward:/index.html";
	}
}
