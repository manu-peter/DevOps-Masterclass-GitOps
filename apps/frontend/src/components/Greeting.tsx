interface GreetingProps {
  name: string
}

export default function Greeting({ name }: GreetingProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-medium text-gray-800">
        Hello, {name}!
      </h2>
      <p className="mt-2 text-gray-600">
        This is running in Kubernetes via Argo CD + Istio
      </p>
    </div>
  )
}
