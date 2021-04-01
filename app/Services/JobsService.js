import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";


class JobsService {
    createJob(newJob) {
        let job = new Job(newJob.title, newJob.pay, newJob.rate, newJob.description, newJob.duties)
        ProxyState.jobs = [...ProxyState.jobs, job]
    }
    deleteJob(id) {
        ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
    }

}

export const jobsService = new JobsService();

