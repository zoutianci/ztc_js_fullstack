# 算法题排序算法是必考题

- 通排序
    时间复杂度  循环
    一重循环 M 最大值 99 100
    又一重循环 N
    又来了一次M 循环 有值的桶子
        循环嵌套 >= 0 1 2 3 有限的, < N
        多层循环是最花时间的  M+N
    时间复杂度 O (M+N+M+N) = O (2*(M+N))  O(M+N)
    缺点: 占物理内存, 因为要分配M个元素数组

- 冒泡
- 快排

35 99 18 76 12 排序

[100]
for 老数组
将数字放到相应的位置,
桶排序