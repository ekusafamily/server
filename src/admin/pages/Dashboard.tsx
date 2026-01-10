
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Registration {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    id_number: string;
    county: string;
    created_at: string;
}

const Dashboard = () => {
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Registration; direction: 'asc' | 'desc' } | null>(null);

    const handleSort = (key: keyof Registration) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedRegistrations = [...registrations].sort((a, b) => {
        if (!sortConfig) return 0;
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    useEffect(() => {
        fetch('/api/registrations')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log("Data received:", data);
                setRegistrations(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch registrations:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Members</h2>
                    <p className="text-muted-foreground">Manage and view registered members.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-sm py-1 px-4">
                        Total Members: {registrations.length}
                    </Badge>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Member Registrations</CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="flex justify-center p-8 text-muted-foreground">Loading...</div>
                    ) : error ? (
                        <div className="p-8 text-center text-red-500 font-medium bg-red-50 rounded-lg">
                            Error loading data: {error}
                            <br />
                            <span className="text-sm text-muted-foreground mt-2 block">Ensure the backend server is running on port 3000.</span>
                        </div>
                    ) : (
                        <Table>
                            <TableCaption>A list of recent registrations.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>National ID</TableHead>
                                    <TableHead
                                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                                        onClick={() => handleSort('county')}
                                    >
                                        County {sortConfig?.key === 'county' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                    </TableHead>
                                    <TableHead>Date Registered</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sortedRegistrations.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">{user.id}</TableCell>
                                        <TableCell>{user.first_name} {user.last_name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.phone}</TableCell>
                                        <TableCell>{user.id_number}</TableCell>
                                        <TableCell>{user.county}</TableCell>
                                        <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default Dashboard;
