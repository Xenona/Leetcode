package main

import "fmt"

func twoSum(nums []int, target int) []int {
    numsMap := make(map[int]uint16);
	for i := uint16(0); i < uint16(len(nums)); i++ {
		var diff int = target - nums[i];
		_, ok := numsMap[diff];
		if (!ok) {
			numsMap[nums[i]] = i;
		} else {
			return []int{int(numsMap[diff]), int(i)}
		}
	};
	return []int{};
};

func main() {
    sli := twoSum([]int{5, 25, 75}, 100);
	fmt.Println(sli)
}
