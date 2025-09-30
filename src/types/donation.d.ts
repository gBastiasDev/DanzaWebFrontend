interface Donation {
  _id?: string;
  amount: number;
  name: string;
  email: string;
  donation_date: Date;
  state: string;
  photo?: string;
  method: string;
}