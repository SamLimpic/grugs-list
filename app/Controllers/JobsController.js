import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";


function _draw() {
    let jobs = ProxyState.jobs
    let template = ''
    jobs.forEach(job => {
        console.log(job)
        template += job.Template
    })
    document.getElementById('jobs').innerHTML = template
}

//Public
export default class JobsController {
    constructor() {
        ProxyState.on('jobs', _draw);

        _draw()
    }


    createJob() {
        window.event.preventDefault()
        const form = window.event.target
        debugger
        let newJob = {
            // @ts-ignore
            title: form.title.value,
            // @ts-ignore
            pay: form.pay.value,
            // @ts-ignore
            rate: form.rate.value,
            // @ts-ignore
            description: form.description.value,
            // @ts-ignore
            duties: form.duties.value,
        }
        jobsService.createJob(newJob)

        // @ts-ignore
        form.reset()

        $('#new-job-form').modal('hide')
    }

    deleteJob(id) {
        jobsService.deleteJob(id)
    }
}
