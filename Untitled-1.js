function* generatePreviousMonthsDates(month, year, count) {
  for (let i = 0; i < count; i++) {
    yield new Date(year, month - i, 1);
  }
}
