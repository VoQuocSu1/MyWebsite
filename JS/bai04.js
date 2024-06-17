function kiemTraNguyenTo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
  }
  
  function demSoNguyenTo(n) {
      let count = 0;
      for (let i = 2; i <= n; i++) {
          if (kiemTraNguyenTo(i)) count++;
      }
      return count;
  }
  // Kết quả: 4 (2, 3, 5, 7)
  console.log(demSoNguyenTo(10));