type TCompany = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type TUser = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: TCompany;
  address: TAddress;
};

export type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  };
};
