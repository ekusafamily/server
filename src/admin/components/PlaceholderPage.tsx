
const PlaceholderPage = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center justify-center h-[50vh]">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                <p className="text-muted-foreground text-lg">This module is coming soon.</p>
            </div>
        </div>
    );
};

export default PlaceholderPage;
