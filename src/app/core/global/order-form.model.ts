export interface OrderFormModel {
  email: string;
  firstName: string;
  lastName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string
  };
  policy: boolean;
  gender: 'male' | 'female';
}
