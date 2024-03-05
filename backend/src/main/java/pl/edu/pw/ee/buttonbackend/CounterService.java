package pl.edu.pw.ee.buttonbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

@Service
public class CounterService {

    private final StringRedisTemplate redisTemplate;

    @Autowired
    public CounterService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }


    public boolean setCounter(String serviceName) {
        this.redisTemplate.opsForValue().set(serviceName, "0");
        return this.redisTemplate.opsForValue().get(serviceName) != null;
    }
    public Long incrementCounter(String serviceName) {
        return redisTemplate.opsForValue().increment(serviceName);
    }

    public Integer getCounter(String serviceName) {
        String value = redisTemplate.opsForValue().get(serviceName);
        return value != null ? Integer.parseInt(value) : 0;
    }
}
