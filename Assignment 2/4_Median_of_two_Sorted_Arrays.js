import java.util.*;

class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int size = nums1.length + nums2.length;

        int[] nums3 = new int[size];

        System.arraycopy(nums1,0,nums3,0,nums1.length);
        System.arraycopy(nums2,0,nums3,nums1.length,nums2.length);

        Arrays.sort(nums3);
        if(nums3.length %2 == 0){
              int mid = nums3.length/2;
            return (nums3[mid-1]+nums3[mid])/2.0;   
        }
        else{
            return nums3[nums3.length/2];
        }
    }
}
