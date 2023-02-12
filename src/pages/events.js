import { useRouter } from "next/router";
import { useState } from "react";

export default function EventList({ eventList }) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter();

    const fetchSportsEvents = async () => {
        const response = await fetch(`http://localhost:4000/events?category=sports`);
        const responseData = await response.json();

        setEvents(responseData)
        router.push('/events?category=sports', undefined, { shallow: true })
    }

    return (
        <>
            <button onClick={fetchSportsEvents}>Sports Events</button>
            <h1>List of events</h1>
            {
                events.map(event => (
                    <div key={event.id}>
                        <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )

}

export async function getServerSideProps(context) {
    const { query } = context;
    const { category } = query;
    const queryString = category ? 'category=sports' : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const responseData = await response.json();

    return {
        props: {
            eventList: responseData,
        }
    }
}