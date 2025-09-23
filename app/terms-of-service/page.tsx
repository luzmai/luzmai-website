export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials on our website 
            for personal, non-commercial transitory viewing only.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p className="mb-4">
            The materials on our website are provided on an 'as is' basis. We make no warranties, 
            expressed or implied, and hereby disclaim and negate all other warranties.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
          <p className="mb-4">
            In no event shall our company or its suppliers be liable for any damages arising out 
            of the use or inability to use the materials on our website.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at 
            <a href="mailto:legal@luzmai.com" className="text-blue-600 hover:underline">
              legal@luzmai.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
