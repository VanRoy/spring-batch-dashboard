package com.github.vanroy.batch.dashboard.model;

import com.fasterxml.jackson.annotation.JsonRawValue;
import lombok.Getter;
import lombok.Setter;

/**
 * Created by julien on 02/07/2016.
 */
@Getter
@Setter
public class Job {

	private String id;
	private String taskName;
	@JsonRawValue
	private String jobExecution;
}
