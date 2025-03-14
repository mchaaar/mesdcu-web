"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import useDashboard from "../../hooks/useDashboard";
import useSubscribe from "../../hooks/useSubscribe";
import useUnsubscribe from "../../hooks/useUnsubscribe";
import useGetMe from "../../hooks/useGetMe";

function AnimatedIcon({ className }) {
  const icons = [GlobeAltIcon, CloudIcon, CpuChipIcon];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[current];
  return (
    <motion.div
      key={current}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CurrentIcon className={className} />
    </motion.div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const { user } = useGetMe();
  useEffect(() => {
    if (user && user.id) {
      setUserId(user.id);
    }
  }, [user]);

  const { data, loading, error, refetch } = useDashboard();
  const { subscribe, loading: subscribeLoading } = useSubscribe();
  const { unsubscribe, loading: unsubscribeLoading } = useUnsubscribe();

  const actionLoading = subscribeLoading || unsubscribeLoading;

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#8000FF] text-center mb-8">
        Dashboard
      </h2>

      {loading && <p className="text-center">Loading dashboard info...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="cursor-pointer p-4 bg-white border rounded-lg shadow hover:shadow-xl transition text-center"
            layoutId={`item-${item.id}`}
            onClick={() => setSelectedItem(item)}
          >
            <div className="flex items-center justify-center h-40 w-full">
              <AnimatedIcon className="h-16 w-16 text-black" />
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="flex justify-around mt-2">
                <div className="flex items-center">
                  <span className="text-sm text-gray-600">Status:</span>
                  {item.isActive ? (
                    <CheckCircleIcon className="h-5 w-5 text-black ml-1" />
                  ) : (
                    <XCircleIcon className="h-5 w-5 text-black ml-1" />
                  )}
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600">Subscribed:</span>
                  {item.subscribed ? (
                    <CheckCircleIcon className="h-5 w-5 text-black ml-1" />
                  ) : (
                    <XCircleIcon className="h-5 w-5 text-black ml-1" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-white/20 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              layoutId={`item-${selectedItem.id}`}
              className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center h-56 w-full bg-transparent">
                <AnimatedIcon className="h-20 w-20 text-black" />
              </div>
              <div className="p-6">
                <p className="mb-4 text-sm text-gray-600">
                  {selectedItem.description}
                </p>
                <div className="flex justify-around mb-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">Status:</span>
                    {selectedItem.isActive ? (
                      <CheckCircleIcon className="h-5 w-5 text-black ml-1" />
                    ) : (
                      <XCircleIcon className="h-5 w-5 text-black ml-1" />
                    )}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">Subscribed:</span>
                    {selectedItem.subscribed ? (
                      <CheckCircleIcon className="h-5 w-5 text-black ml-1" />
                    ) : (
                      <XCircleIcon className="h-5 w-5 text-black ml-1" />
                    )}
                  </div>
                </div>
                <button
                  onClick={async () => {
                    try {
                      if (selectedItem.subscribed) {
                        await unsubscribe(userId, selectedItem.id);
                      } else {
                        await subscribe(userId, selectedItem.id);
                      }
                      const updatedData = await refetch();
                      const updatedItem = updatedData.find(
                        (i) => i.id === selectedItem.id
                      );
                      if (updatedItem) {
                        setSelectedItem(updatedItem);
                      }
                    } catch (e) {
                      console.error(e.message);
                    }
                  }}
                  className="w-full py-3 bg-[#8000FF] text-white rounded-lg hover:bg-[#6F00E6] transition-colors"
                >
                  {actionLoading
                    ? "Processing..."
                    : selectedItem.subscribed
                    ? "Unsubscribe"
                    : "Subscribe"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-6 text-center">
        <a
          href="/"
          className="inline-block text-[#8000FF] hover:text-[#6F00E6] transition-colors"
        >
          Back to homepage
        </a>
      </p>
    </div>
  );
}
