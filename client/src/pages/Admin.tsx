import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LogOut, LayoutDashboard, FolderOpen, Wrench, Award, MessageSquare,
  FileText, BarChart3, Lock, Eye, EyeOff, Users, TrendingUp
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/api';
import type { AnalyticsData, ContactMessage } from '@/types';

/* ────────────────────────── LOGIN FORM ────────────────────────── */

function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
    } catch {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 glass-strong rounded-2xl border border-border-primary p-8 w-full max-w-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center">
            <Lock size={20} className="text-accent-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary">Admin Login</h1>
            <p className="text-xs text-text-tertiary">Access the dashboard</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full px-4 py-3 rounded-xl bg-bg-tertiary/50 border border-border-primary text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-12 rounded-xl bg-bg-tertiary/50 border border-border-primary text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-all text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-error text-xs font-medium bg-error/10 border border-error/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-accent-primary text-white font-semibold text-sm hover:bg-accent-secondary transition-all disabled:opacity-50 shadow-lg shadow-accent-primary/20"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

/* ────────────────────────── DASHBOARD ────────────────────────── */

type Tab = 'overview' | 'projects' | 'skills' | 'certs' | 'messages' | 'blog' | 'analytics';

function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    api.get('/analytics').then((res) => setAnalytics(res.data.data)).catch(() => {});
    api.get('/messages').then((res) => setMessages(res.data.data)).catch(() => {});
  }, []);

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'certs', label: 'Certificates', icon: Award },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const unreadMessages = messages.filter((m) => !m.read).length;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-64 bg-bg-secondary border-r border-border-primary flex flex-col z-40">
        {/* Logo */}
        <div className="p-5 border-b border-border-primary">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center">
              <span className="text-accent-primary font-bold text-sm font-mono">TH</span>
            </div>
            <div>
              <span className="font-semibold text-text-primary text-sm">Admin Panel</span>
              <p className="text-xs text-text-tertiary">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-accent-primary/10 text-accent-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/50'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
              {tab.id === 'messages' && unreadMessages > 0 && (
                <span className="ml-auto px-2 py-0.5 rounded-full bg-error/10 text-error text-xs font-bold">
                  {unreadMessages}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-border-primary">
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-error hover:bg-error/5 transition-all"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="ml-64 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'overview' && (
              <OverviewTab analytics={analytics} messages={messages} />
            )}
            {activeTab === 'messages' && (
              <MessagesTab messages={messages} setMessages={setMessages} />
            )}
            {(activeTab === 'projects' || activeTab === 'skills' || activeTab === 'certs' || activeTab === 'blog' || activeTab === 'analytics') && (
              <PlaceholderTab tab={activeTab} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ────────────────────── OVERVIEW TAB ────────────────────── */

function OverviewTab({
  analytics,
  messages,
}: {
  analytics: AnalyticsData | null;
  messages: ContactMessage[];
}) {
  const stats = [
    { label: 'Total Visitors', value: analytics?.totalVisitors ?? 0, icon: Users, color: 'text-info' },
    { label: 'Messages', value: analytics?.totalMessages ?? messages.length, icon: MessageSquare, color: 'text-success' },
    { label: 'Projects', value: analytics?.totalProjects ?? 3, icon: FolderOpen, color: 'text-accent-primary' },
    { label: 'Blog Posts', value: analytics?.totalBlogs ?? 0, icon: TrendingUp, color: 'text-warning' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">Dashboard Overview</h1>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="glass-strong rounded-xl p-5 border border-border-primary">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-text-tertiary font-medium uppercase tracking-wider">{stat.label}</span>
              <stat.icon size={18} className={stat.color} />
            </div>
            <div className="text-3xl font-bold text-text-primary">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Recent Messages */}
      <div className="glass-strong rounded-xl border border-border-primary">
        <div className="p-5 border-b border-border-primary">
          <h2 className="font-semibold text-text-primary">Recent Messages</h2>
        </div>
        <div className="divide-y divide-border-primary">
          {messages.length === 0 ? (
            <div className="p-8 text-center text-text-tertiary text-sm">No messages yet</div>
          ) : (
            messages.slice(0, 5).map((msg, i) => (
              <div key={i} className="p-4 hover:bg-bg-tertiary/30 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-text-primary">{msg.name}</span>
                  <span className="text-xs text-text-tertiary">
                    {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : 'Now'}
                  </span>
                </div>
                <p className="text-xs text-text-secondary">{msg.email}</p>
                <p className="text-sm text-text-secondary mt-1 line-clamp-2">{msg.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── MESSAGES TAB ────────────────────── */

function MessagesTab({
  messages,
  setMessages,
}: {
  messages: ContactMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ContactMessage[]>>;
}) {
  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/messages/${id}`);
      setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch {
      // silently fail
    }
  };

  const handleMarkRead = async (id: string) => {
    try {
      await api.put(`/messages/${id}`, { read: true });
      setMessages((prev) =>
        prev.map((m) => (m._id === id ? { ...m, read: true } : m))
      );
    } catch {
      // silently fail
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">
        Messages ({messages.length})
      </h1>

      <div className="space-y-3">
        {messages.length === 0 ? (
          <div className="glass-strong rounded-xl border border-border-primary p-12 text-center text-text-tertiary">
            No messages yet
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className={`glass-strong rounded-xl border border-border-primary p-5 ${
                !msg.read ? 'border-l-4 border-l-accent-primary' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-text-primary">{msg.name}</span>
                    {!msg.read && (
                      <span className="px-2 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-bold">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-accent-primary mb-2">{msg.email}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{msg.message}</p>
                  {msg.createdAt && (
                    <p className="text-xs text-text-tertiary mt-2">
                      {new Date(msg.createdAt).toLocaleString()}
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  {!msg.read && msg._id && (
                    <button
                      onClick={() => handleMarkRead(msg._id!)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-accent-primary/10 text-accent-primary hover:bg-accent-primary/20 transition-colors"
                    >
                      Mark Read
                    </button>
                  )}
                  {msg._id && (
                    <button
                      onClick={() => handleDelete(msg._id!)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-error/10 text-error hover:bg-error/20 transition-colors"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ────────────────────── PLACEHOLDER TAB ────────────────────── */

function PlaceholderTab({ tab }: { tab: string }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6 capitalize">{tab}</h1>
      <div className="glass-strong rounded-xl border border-border-primary p-12 text-center">
        <p className="text-text-secondary">
          {tab.charAt(0).toUpperCase() + tab.slice(1)} management coming soon.
          <br />
          <span className="text-text-tertiary text-sm">CRUD operations for {tab} will be available here.</span>
        </p>
      </div>
    </div>
  );
}

/* ────────────────────── ADMIN PAGE ────────────────────── */

export function Admin() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent-primary/30 border-t-accent-primary rounded-full animate-spin" />
      </div>
    );
  }

  return isAuthenticated ? <Dashboard /> : <LoginForm />;
}
