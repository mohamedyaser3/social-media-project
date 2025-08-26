import React from 'react'

export default function CardHeader({cardHeader}) {
  return <>
  {/* رأس البوست */}
          <div className="flex items-center mb-3">
            <img
              src={cardHeader.user.photo}
              alt="profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h2 className="font-semibold">{cardHeader.user?.name || "User"}</h2>
              <p className="text-sm text-gray-500">
                {new Date(cardHeader.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
  </>
}
