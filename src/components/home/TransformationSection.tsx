import React from 'react';

export const TransformationSection: React.FC = () => {
  return (
    <section className="bg-white pt-20 pb-0 overflow-hidden border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title matching Screenshot 5 */}
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-14">
          How communities are transformed
        </h2>

        {/* 3 Columns matching Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Step 1 */}
          <div className="flex flex-col">
            <span className="font-serif font-bold text-6xl sm:text-7xl text-gd-pink leading-none mb-4">
              1
            </span>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-900 mb-3 leading-snug">
              We equip churches to launch local training programs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We partner with local churches and equip them with practical training they provide for their own people and support through their own resources.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col">
            <span className="font-serif font-bold text-6xl sm:text-7xl text-gd-pink leading-none mb-4">
              2
            </span>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-900 mb-3 leading-snug">
              They train and send their people to least-reached areas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              It starts when a group of cooperating churches chooses a director to lead a phase of training in discipleship, small business, or leadership. Global Disciples Alliance Ethiopia then prepares each director to equip their people.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <span className="font-serif font-bold text-6xl sm:text-7xl text-gd-pink leading-none mb-4">
              3
            </span>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-900 mb-3 leading-snug">
              Disciples and locally sustainable fellowships are multiplied
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We see these three phases of training—discipleship, small business, or leadership—as interlocking parts in a greater strategy to multiply disciples and churches among least-reached people. When all three phases of training work together, we see significant and lasting multiplication.
            </p>
          </div>
        </div>
      </div>

      {/* Iconic Overlapping Faces Collage over Solid Blue Curved Wave matching Screenshot 5 */}
      <div className="relative pt-12 pb-6">
        {/* Faces Collage Container */}
        <div className="max-w-6xl mx-auto px-4 relative z-10 flex items-end justify-center gap-3 sm:gap-6 -mb-16 sm:-mb-24 flex-wrap sm:flex-nowrap">
          {/* Face 1: Smiling man */}
          <div className="w-28 h-28 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              alt="Smiling man"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Face 2: Mother in yellow/patterned headscarf */}
          <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
              alt="Woman smiling in headscarf"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Face 3: Grandmother */}
          <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 bg-slate-200 self-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
              alt="Smiling elder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Face 4: Large center right Ethiopian boy smiling */}
          <div className="w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
              alt="Young Ethiopian boy smiling"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Solid Blue Wave Backdrop */}
        <div className="bg-gd-blue w-full h-40 sm:h-56 lg:h-64 mt-12 rounded-t-[50%] sm:rounded-t-[100%] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gd-blue via-blue-600 to-gd-blue-dark opacity-90" />
        </div>
      </div>
    </section>
  );
};
