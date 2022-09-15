function FindTwoSmalest(arr) {
    console.log(arr.sort((a,b) => a - b).slice(0,2).join(' '));
}
FindTwoSmalest([30, 15, 50, 5])