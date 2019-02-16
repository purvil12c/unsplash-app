import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "cd9531f34d088f0c8e9a6ea498499f3a24820c1c5bf6a03d89cb9c7ba499aed6",
  secret: "364c000f5ac35cd5387abc2ab2c79fdb1211058f4774ebb7b3d3d26e5af75f5f",
  callbackUrl: "http://localhost:3000"
});

export default unsplash;
