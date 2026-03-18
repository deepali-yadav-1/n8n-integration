import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import {
  Users, ShoppingCart, DollarSign, TrendingUp,
  ArrowUpRight, ArrowDownRight, Activity, Package
} from 'lucide-react'
import './App.css'

const monthlyData = [
  { month: 'Jan', revenue: 42000, users: 3200, orders: 580 },
  { month: 'Feb', revenue: 47500, users: 3800, orders: 620 },
  { month: 'Mar', revenue: 51000, users: 4100, orders: 710 },
  { month: 'Apr', revenue: 49200, users: 4400, orders: 690 },
  { month: 'May', revenue: 56800, users: 5000, orders: 780 },
  { month: 'Jun', revenue: 61000, users: 5600, orders: 840 },
  { month: 'Jul', revenue: 58400, users: 5200, orders: 810 },
  { month: 'Aug', revenue: 65200, users: 6100, orders: 920 },
  { month: 'Sep', revenue: 70100, users: 6800, orders: 990 },
  { month: 'Oct', revenue: 74500, users: 7300, orders: 1050 },
  { month: 'Nov', revenue: 80000, users: 8000, orders: 1130 },
  { month: 'Dec', revenue: 92000, users: 9200, orders: 1280 },
]

const categoryData = [
  { category: 'Electronics', sales: 4200 },
  { category: 'Clothing', sales: 3100 },
  { category: 'Books', sales: 1800 },
  { category: 'Home', sales: 2700 },
  { category: 'Sports', sales: 2100 },
  { category: 'Beauty', sales: 1600 },
]

const recentOrders = [
  { id: '#ORD-1024', customer: 'Alice Johnson', product: 'Wireless Headphones', amount: '$129.99', status: 'Delivered', date: 'Dec 14, 2025' },
  { id: '#ORD-1023', customer: 'Bob Smith', product: 'Running Shoes', amount: '$89.50', status: 'Shipped', date: 'Dec 13, 2025' },
  { id: '#ORD-1022', customer: 'Carol Davis', product: 'Yoga Mat', amount: '$45.00', status: 'Processing', date: 'Dec 13, 2025' },
  { id: '#ORD-1021', customer: 'David Lee', product: 'Coffee Maker', amount: '$199.00', status: 'Delivered', date: 'Dec 12, 2025' },
  { id: '#ORD-1020', customer: 'Emma Wilson', product: 'Desk Lamp', amount: '$65.99', status: 'Cancelled', date: 'Dec 12, 2025' },
]

const topProducts = [
  { name: 'Wireless Headphones', units: 842, revenue: '$109,270', growth: 12.4 },
  { name: 'Smart Watch', units: 631, revenue: '$94,650', growth: 8.7 },
  { name: 'Running Shoes', units: 598, revenue: '$53,382', growth: -2.1 },
  { name: 'Coffee Maker', units: 512, revenue: '$101,888', growth: 15.6 },
]

const statusColors = {
  Delivered: { bg: '#dcfce7', color: '#16a34a' },
  Shipped: { bg: '#dbeafe', color: '#2563eb' },
  Processing: { bg: '#fef9c3', color: '#ca8a04' },
  Cancelled: { bg: '#fee2e2', color: '#dc2626' },
}

function StatCard({ title, value, change, positive, Icon, color }) {
  return (
    <div className="stat-card">
      <div className="stat-card__header">
        <span className="stat-card__title">{title}</span>
        <div className="stat-card__icon" style={{ backgroundColor: color + '1a', color }}>
          <Icon size={20} />
        </div>
      </div>
      <div className="stat-card__value">{value}</div>
      <div className={`stat-card__change ${positive ? 'positive' : 'negative'}`}>
        {positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span>{change} from last month</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar__logo">
          <Activity size={24} color="#6366f1" />
          <span>StatBoard</span>
        </div>
        <nav className="sidebar__nav">
          <a href="#" className="sidebar__link active">
            <Activity size={18} /> Overview
          </a>
          <a href="#" className="sidebar__link">
            <ShoppingCart size={18} /> Orders
          </a>
          <a href="#" className="sidebar__link">
            <Users size={18} /> Customers
          </a>
          <a href="#" className="sidebar__link">
            <Package size={18} /> Products
          </a>
          <a href="#" className="sidebar__link">
            <TrendingUp size={18} /> Analytics
          </a>
          <a href="#" className="sidebar__link">
            <DollarSign size={18} /> Revenue
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="main">
        <header className="main__header">
          <div>
            <h1 className="main__title">Dashboard Overview</h1>
            <p className="main__subtitle">Welcome back! Here's what's happening.</p>
          </div>
          <div className="header__date">December 2025</div>
        </header>

        {/* Stat cards */}
        <section className="stats-grid">
          <StatCard title="Total Revenue" value="$92,000" change="+15.0%" positive Icon={DollarSign} color="#6366f1" />
          <StatCard title="Total Users" value="9,200" change="+15.0%" positive Icon={Users} color="#0ea5e9" />
          <StatCard title="Total Orders" value="1,280" change="+13.3%" positive Icon={ShoppingCart} color="#10b981" />
          <StatCard title="Growth Rate" value="28.7%" change="+3.2%" positive Icon={TrendingUp} color="#f59e0b" />
        </section>

        {/* Charts row */}
        <section className="charts-row">
          <div className="chart-card chart-card--wide">
            <div className="chart-card__header">
              <h2 className="chart-card__title">Revenue & Users (2025)</h2>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={monthlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" fill="url(#colorRevenue)" strokeWidth={2} name="Revenue ($)" />
                <Area type="monotone" dataKey="users" stroke="#0ea5e9" fill="url(#colorUsers)" strokeWidth={2} name="Users" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <div className="chart-card__header">
              <h2 className="chart-card__title">Sales by Category</h2>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={categoryData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="category" tick={{ fontSize: 11 }} stroke="#94a3b8" />
                <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="sales" fill="#6366f1" radius={[4, 4, 0, 0]} name="Units Sold" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Bottom row: orders table + top products */}
        <section className="bottom-row">
          <div className="table-card">
            <div className="chart-card__header">
              <h2 className="chart-card__title">Recent Orders</h2>
            </div>
            <div className="table-wrapper">
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map(order => (
                    <tr key={order.id}>
                      <td className="order-id">{order.id}</td>
                      <td>{order.customer}</td>
                      <td className="muted">{order.product}</td>
                      <td className="bold">{order.amount}</td>
                      <td>
                        <span
                          className="status-badge"
                          style={statusColors[order.status]}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="muted">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="products-card">
            <div className="chart-card__header">
              <h2 className="chart-card__title">Top Products</h2>
            </div>
            <div className="products-list">
              {topProducts.map((product, i) => (
                <div key={product.name} className="product-item">
                  <div className="product-rank">{i + 1}</div>
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    <div className="product-units">{product.units} units sold</div>
                  </div>
                  <div className="product-right">
                    <div className="product-revenue">{product.revenue}</div>
                    <div className={`product-growth ${product.growth >= 0 ? 'positive' : 'negative'}`}>
                      {product.growth >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {Math.abs(product.growth)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
