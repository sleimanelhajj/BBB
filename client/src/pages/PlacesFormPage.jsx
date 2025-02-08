import { useEffect, useState } from "react";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import { Navigate, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import axios from "axios";

export default function PlacesFormPage() {
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [price, setPrice] = useState(100);
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/places/' + id).then(response => {
            const { data } = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
            setPrice(data.price);

        });
    }, [id]);

    async function savePlace(ev) {
        if (id) {
            // its an old place 
            ev.preventDefault();
            await axios.put('/places',
                { id, title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price });
            setRedirect(true);

        } else {

            // new place
            ev.preventDefault();
            await axios.post('/places',
                { title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price });
            setRedirect(true);
        }


    }


    if (redirect) {
        return <Navigate to={'/account/places'} />
    }



    return (
        <div>
            <AccountNav />
            <form onSubmit={savePlace}>

                {/* title */}
                <h2 className="text-xl mt-4">Title</h2>
                <p className="text-gray-500 text-sm">Title for your place!</p>
                <input type="text" value={title} onChange={(ev) => setTitle(ev.target.value)} placeholder="title" />


                {/* Address */}
                <h2 className="text-xl mt-4">Address</h2>
                <p className="text-gray-500 text-sm">Where are you located?</p>
                <input type="text" value={address} onChange={(ev) => setAddress(ev.target.value)} placeholder="address" />

                {/* Photos set by link/upload*/}
                <h2 className="text-xl mt-4">Photos</h2>
                <p className="text-gray-500 text-sm">Post pics of your place</p>
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

                <div>
                    {/* Describe */}
                    <h2 className="text-xl mt-4">Description</h2>
                    <p className="text-gray-500 text-sm">Describe the place for the user</p>
                    <textarea value={description} onChange={(ev) => setDescription(ev.target.value)} />

                    {/* Perks  */}
                    <h2 className="text-xl mt-4 ">Perks</h2>
                    <p className="text-gray-500 text-sm">Select perks</p>
                    <Perks selected={perks} onChange={setPerks} />
                </div>
                {/* ExtraInfo needed  */}
                <h2 className="text-xl mt-4 ">Extra info</h2>
                <p className="text-gray-500 text-sm">house rules ect</p>
                <textarea value={extraInfo} onChange={(ev) => setExtraInfo(ev.target.value)} />

                {/* Checkin/out/guests */}
                <h2 className="text-xl mt-4 ">Check in/out, max guests</h2>
                <p className="text-gray-500 text-sm">add check in and out times</p>

                <div className="grid sm:grid-cols-2 gap-3 md:grid-cols-4">
                    <div>
                        {/* CheckIn  */}
                        <h3 className=" mt-2">Check in time</h3>
                        <input value={checkIn} onChange={(ev) => setCheckIn(ev.target.value)} type="text" />
                    </div>
                    <div>
                        {/* CheckOut  */}
                        <h3 className=" mt-2">Check out time</h3>
                        <input value={checkOut} onChange={(ev) => setCheckOut(ev.target.value)} type="text" />
                    </div>
                    <div>
                        {/* Max Guest  */}
                        <h3 className=" mt-2">Guests number</h3>
                        <input value={maxGuests} onChange={(ev) => setMaxGuests(ev.target.value)} type="number" />
                    </div>
                    <div>
                        {/* price  */}
                        <h3 className=" mt-2">Price per night</h3>
                        <input value={price} onChange={(ev) => setPrice(ev.target.value)} type="number" />
                    </div>
                </div>

                {/* Save button at the end */}
                <div>
                    <button className="primary mt-4">Save</button>
                </div>
            </form>
        </div>
    );

}