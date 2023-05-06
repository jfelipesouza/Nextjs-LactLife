export type RestaurantDTO = {
  id: string;
  image: string;
  name: string;
  numberOfStar: number;
  address: string;
};

export type Restaurants = {
  id: string;
  name: string;
  numberOfStar: number;
  address: string;
  image: {
    mimeType: string;
    file: string;
  };
};
