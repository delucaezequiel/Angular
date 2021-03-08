export class CounterService
{
  active: number = 0;
  inactive: number = 0;
  increaseActive()
  {
    this.active++;
    console.log("Active:", this.active);
  }
  increaseInactive()
  {
    this.inactive++;
    console.log("Inactive:", this.inactive);
  }
}
