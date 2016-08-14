package com.github.vanroy.batch.dashboard.repository;

import com.github.vanroy.batch.dashboard.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by julien on 02/07/2016.
 */
public interface JobRepository extends MongoRepository<Job, String> {

}
