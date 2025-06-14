var topKFrequent = function(nums, k) {
    // 1. 使用哈希表统计频率
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // 2. 创建桶数组，索引表示频率，值是该频率的所有数字
    const bucket = [];
    for (const [num, freq] of frequencyMap) {
        if (!bucket[freq]) {
            bucket[freq] = [];
        }
        bucket[freq].push(num);
    }
    
    // 3. 从高频率到低频率遍历桶，收集结果
    const result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i]) {
            result.push(...bucket[i]);
        }
    }
    
    // 4. 如果结果超过k个，截取前k个
    return result.slice(0, k);
};