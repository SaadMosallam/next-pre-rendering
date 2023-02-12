import useSwr from 'swr';

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const responseData = await response.json()

    return responseData
}

export default function DashboardSWR() {
    const { data, error } = useSwr('dashboard', fetcher);

    if (error) return 'An error has occurred'
    if (!data) return <h2>Loading...</h2>
    const { posts, likes, followers, following } = data;
    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {posts}</h2>
            <h2>Likes - {likes}</h2>
            <h2>Followers - {followers}</h2>
            <h2>Following - {following}</h2>
        </div>
    )
}