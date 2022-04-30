export interface ISubscription {
  // ID of the package
  id: string;

  // Short name of the package, used to quickly access it
  slug?: string;

  // Title of the subscription package
  title: string;

  // Description of the subscription package
  description?: string;

  // Number of sessions in the subscription package
  noOfSessions?: string;

  // Price of the subscription package after discount
  specialPrice?: number;

  // Original price of the subscription package
  originalPrice?: number;

  // Discount offered on the subscription package
  discount?: string;

  // Link to booking the subscription package on simply book
  subscriptionPackageLink?: string;

  // SimplyBook's service number
  service: number;

  // Type of image on the subscription page
  image?: string;

  // Background color of the subscription package
  background?: string;

  // Outline color of the subscription package
  outline?: string;

  // Array for full description points
  fullDescription?: Array<string>;

  // Array for what is in it for you points
  whatIsInItForYou?: Array<string>;

  // Array for value addition points
  valueAddition?: Array<string>;
}
