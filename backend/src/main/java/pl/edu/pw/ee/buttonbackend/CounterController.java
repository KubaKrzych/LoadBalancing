package pl.edu.pw.ee.buttonbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/counter")
public class CounterController {

    private final CounterService counterService;

    @Autowired
    public CounterController(CounterService counterService) {
        this.counterService = counterService;
    }

    @PostMapping("/increment/{serviceName}")
    public Long incrementCounter(@PathVariable String serviceName) {
        return counterService.incrementCounter(serviceName);
    }

    @GetMapping("/get/{serviceName}")
    public Integer getCounter(@PathVariable String serviceName) {
        return counterService.getCounter(serviceName);
    }

    @PostMapping("/set/{serviceName}")
    public Boolean setCounter(@PathVariable String serviceName) {
        return counterService.setCounter(serviceName);
    }

}
