import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema({
    username: String,
    comment: String,
    rating: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: {
        public_id: {
            type: String,
            // required: true
        },
        url: {
            type: String,
            // required: true
        },
    }
});

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    cuisine: [String],
    menuItems: [itemSchema],
    reviews: [reviewSchema],
    overallRating: {
        type: Number,
        default: 0
    },
    contactInfo: {
        phone: String,
        email: String,
        website: String
    },
    photosUrls: [{
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    }],  // URLs to images of the restaurant
    timings: String
}, {
    timestamps: true  // adds createdAt and updatedAt timestamps
});

export default Restaurant = mongoose.model('Restaurant', restaurantSchema);
