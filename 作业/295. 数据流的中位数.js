class MedianFinder {
    constructor() {
        this.nums = [];
    }
    
    addNum(num) {
        // 使用二分查找找到插入位置
        let left = 0, right = this.nums.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.nums[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        this.nums.splice(left, 0, num);
    }
    
    findMedian() {
        const n = this.nums.length;
        if (n % 2 === 0) {
            return (this.nums[n/2 - 1] + this.nums[n/2]) / 2;
        } else {
            return this.nums[Math.floor(n/2)];
        }
    }
}