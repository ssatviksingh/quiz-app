export default function Sidebar() {
  return (
    <aside className="bg-white border rounded-xl p-6 sticky top-8" aria-label="Right panel">
      <h3 className="font-semibold text-lg">Use this to show actions, filters, or meta.</h3>

      <div className="mt-6 space-y-4">
        <input aria-label="Field 1" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-brand" placeholder="Input 1" />
        <input aria-label="Field 2" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-brand" placeholder="Input 2" />
      </div>

      <div className="mt-6">
        <button className="w-full py-3 bg-gradient-to-b from-brand-50 to-white rounded-lg text-brand font-medium transition-smooth hover:from-brand-50 hover:to-brand-100">Apply</button>
      </div>
    </aside>
  );
}
